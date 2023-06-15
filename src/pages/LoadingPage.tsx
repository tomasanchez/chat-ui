import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingScreen = () => {

    return (
        <>
            <main className="d-flex align-content-center align-items-center">
                <div className="container text-center">
                    <Typography variant="h1" component="h2" gutterBottom>
                        "Loading"
                    </Typography>
                    <Typography variant="h3" component="h2" gutterBottom>
                        "..."
                    </Typography>
                    <CircularProgress/>
                </div>
            </main>
        </>
    )
}

export default LoadingScreen