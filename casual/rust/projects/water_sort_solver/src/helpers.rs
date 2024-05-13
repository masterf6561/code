use serde_json::Value;

pub fn convert_tubes_body(value: &Value) -> Option<Vec<Vec<i32>>> {
    match value {
        Value::Array(arr) => {
            let mut result = Vec::new();
            for inner_value in arr {
                if let Value::Array(inner_arr) = inner_value {
                    let mut inner_result = Vec::new();
                    for inner_inner_value in inner_arr {
                        if let Value::String(s) = inner_inner_value {
                            if let Ok(parsed_int) = s.parse::<i32>() {
                                inner_result.push(parsed_int);
                            } else if let Ok(_parsed_string) = s.parse::<String>() {
                                inner_result.push(0);
                            } else {
                                return None; // Parsing failed
                            }
                        } else {
                            return None; // Not a string
                        }
                    }
                    result.push(inner_result);
                } else {
                    return None; // Not an array
                }
            }
            Some(result)
        }
        _ => None, // Not an array
    }
}
