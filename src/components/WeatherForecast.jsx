import './WeatherForecast.css'

function WeatherForecast(props) {
    return (
        <div className="weather">
            <h2>{props.day}</h2>
            <img src={props.img} alt={props.imgAlt} />
            <p><span>{props.conditions}: </span>current weather conditions</p>
            <p><span>{props.time}: </span>time of day</p>
        </div>
    )
}
export default WeatherForecast;
