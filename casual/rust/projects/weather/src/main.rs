use clap::Parser;
use colored::*;
use serde::Deserialize;
use std::fs::read_to_string;

#[derive(Parser)]
struct Args {
    city: String,
}

#[derive(Debug, Deserialize)]
struct WeatherResponse {
    weather: Vec<Weather>,
    main: Main,
    wind: Wind,
    name: String,
}

#[derive(Debug, Deserialize)]
struct Weather {
    main: String,
    description: String,
    icon: String,
}

#[derive(Debug, Deserialize)]
struct Main {
    temp: f64,
    humidity: f64,
}

#[derive(Debug, Deserialize)]
struct Wind {
    speed: f64,
}

fn get_city_weather(
    location: &String,
    api_key: &String,
) -> Result<WeatherResponse, reqwest::Error> {
    let url = format!(
        "https://api.openweathermap.org/data/2.5/weather?q={}&units=metric&appid={}",
        location, api_key
    );
    let response = reqwest::blocking::get(&url)?;
    let body = response.json::<WeatherResponse>()?;
    Ok(body)
}

fn get_weather_icon(icon_id: &str) -> &'static str {
    match icon_id {
        "01d" => "☀️",
        "01n" => "🌕",
        "02d" => "🌤️",
        "02n" => "🌓",
        "03d" => "☁️",
        "03n" => "☁️",
        "04d" => "🌥️",
        "04n" => "🌥️",
        "09d" => "🌦️",
        "09n" => "🌧️",
        "10d" => "🌦️",
        "10n" => "🌧️",
        "11d" => "⛈️",
        "11n" => "⛈️",
        "13d" => "❄️",
        "13n" => "❄️",
        "50d" => "🌫️",
        "50n" => "🌫️",
        _ => "❓",
    }
}

fn format_output(response: WeatherResponse) {
    let description = &response.weather[0].description;
    let weather = &response.weather[0].main;
    let temp = response.main.temp;
    let humidity = response.main.humidity;
    let wind_speed = response.wind.speed;
    let icon = &response.weather[0].icon;
    let name = response.name;
    let output_text = format!(
        "The Weather in {}: {} {} 
> mostly {}.
> Temperature is {} °C 
> Humidity is at {} %.
> windspeeds around {} m/s which equals {:.2} km/h.
",
        name,
        weather,
        get_weather_icon(&icon),
        description,
        temp,
        humidity,
        wind_speed,
        wind_speed * 3.6
    );
    if description == "few clouds" {
        println!("{}", "test".green());
    }
    let output_colored = match response.weather[0].description.as_str() {
        "clear sky" => output_text.yellow(),
        "few clouds" | "scattered clouds" | "broken clouds" => output_text.cyan(),
        "overcast clouds" | "mist" | "haze" | "smoke" | "sand" | "dust" | "fog" | "squalls" => {
            output_text.dimmed()
        }
        "shower rain" | "light rain" | "rain" | "thunderstorm" | "snow" => output_text.blue(),
        _ => output_text.normal(),
    };
    println!("{}", output_colored);
}

fn main() {
    let file_content = read_to_string("/usr/local/etc/.key").unwrap();
    let api_key: String = file_content.trim().to_string();
    let args = Args::parse();
    let city = &args.city;
    match get_city_weather(&city, &api_key) {
        Ok(response) => {
            format_output(response);
        }
        Err(err) => {
            println!("Error {}", err);
        }
    }
}

// for further information and documentation checkout: https://openweathermap.org/current#data
