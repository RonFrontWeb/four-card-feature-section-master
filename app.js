
function App() {
    return (
        <Grid/>
    )
}

function Grid() {
    return(
        <div className="grid">
            <Headlines
                className="headline__container"
                headline__title="headline__title"
                headline__subtitle="headline__subtitle"
                headline__text="headline__text"
            />
            <Card
                className="card card--border--cyan"
                title="Supervisor"
                title__Class="title"
                text="Monitors activity to identify project roadblocks"
                text__class="text"
                icon="supervisor" 
                icon__class="icon"
            />
            <Card 
                className="card card--border--red"
                title="Team Builder"
                title__Class="title"
                text=" Scans our talent network to create the optimal team for your project"
                text__class="text"
                icon="team-builder"
                icon__class="icon"
            />
            <Card 
                className="card card--border--orange"
                title="Karma"
                title__Class="title"
                text="Regularly evaluates our talent to ensure quality"
                text__class="text"
                icon="karma"
                icon__class="icon"
            />
            <Card 
                className="card card--border--blue"
                title="Calculator"
                title__Class="title"
                text="Uses data from past projects to provide better delivery estimates"
                text__class="text"
                icon="calculator"
                icon__class="icon"
            />
        </div>
    )
}

function Headlines({className,headline__subtitle,headline__text,headline__title}) {
    return (
        <div className={className}>
            <h1 className={headline__title}>Reliable, efficient delivery</h1>
            <h2 className={headline__subtitle}>Powered by Technology</h2>
            <p className={headline__text}>Our Artificial Intelligence powered tools use millions of project data points 
                 to ensure that your project is successful
            </p>
        </div>
    )
    
}

function Card({className,title,title__Class,text,text__class,icon,icon__class,}) {
    return (
        <div className={className}>
            <h2 className={title__Class}>{title}</h2>
            <p className={text__class}>{text}</p>
            <img className={icon__class} src={`images/icon-${icon}.svg`} alt="icon" />
        </div>
    )
}



ReactDOM.createRoot(document.getElementById("root")).render(<App />);
