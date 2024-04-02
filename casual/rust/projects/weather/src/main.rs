use clap::{error, Parser};
use serde_json::Value;

const API_KEY: &str = "edd88372a14f134203a58212e743f06a";

#[derive(Parser)]
struct Args {
    city: String,
    #[clap(default_value_t, value_enum)]
    time: Time,
}

#[derive(clap::ValueEnum, Clone, Default, Debug)]
enum Time {
    Now,
    #[default]
    Today,
    Tomorrow,
}

#[derive(Debug)]
struct Loc {
    lon: f64,
    lat: f64,
    name: String,
}

#[tokio::main]
async fn get_city_loc(city_name: String) -> Result<Loc, Box<dyn std::error::Error>> {
    let response = reqwest::get(format!(
        "http://api.openweathermap.org/geo/1.0/direct?q={}&limit=1&appid={}",
        city_name, API_KEY
    ))
    .await?;
    let body = response.text().await?;
    let body: Value = serde_json::from_str(&body)?;
    // Access the "lat" and "lon" fields
    let lon = body[0]["lon"]
        .as_f64()
        .ok_or("Error while forming Lon to f64")?;
    let lat = body[0]["lat"]
        .as_f64()
        .ok_or("Error while formating Lat as f64")?;
    let name = body[0]["name"].to_string();

    Ok(Loc { lon, lat, name })
}

#[derive(Debug)]
struct Weather {
    main: String,
    description: String,
    temp: f64,
    wind_speed: f64,
}

#[tokio::main]
async fn get_city_weather(location: Loc) -> Result<Weather, Box<dyn std::error::Error>> {
    let response = reqwest::get(format!(
        "https://api.openweathermap.org/data/2.5/weather?lat={}&lon={}&units=metric&appid={}",
        location.lat, location.lon, API_KEY
    ))
    .await?;
    let body = response.text().await?;
    let body: Value = serde_json::from_str(&body)?;
    // Access the "lat" and "lon" fields
    let main = body["weather"][0]["main"].to_string();
    let description = body["weather"][0]["description"].to_string();
    let temp = body["main"]["temp"]
        .as_f64()
        .ok_or("Error while forming Temp to f64")?;
    let wind_speed = body["wind"]["speed"]
        .as_f64()
        .ok_or("Error while formating WindSpeed as f64")?;
    Ok(Weather {
        main,
        description,
        temp,
        wind_speed,
    })
}

fn format_output(weather: Weather) {
    println!("{:?}", weather);
}

fn main() {
    // geolocator to transform city to lat/lon
    // http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=5&appid=API_KEY
    //

    // weather api request
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&exclude={part}&appid={API key}
    let args = Args::parse();
    let city = &args.city;
    let time = &args.time;
    let city_location: Loc =
        get_city_loc(city.to_string()).expect("Error while converting Location to Lon/Lat");
    let city_weather: Weather =
        get_city_weather(city_location).expect("Error while getting City weather");
    format_output(city_weather);
}

// for further information and documentation checkout: https://openweathermap.org/current#data
