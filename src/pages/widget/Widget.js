import { useParams } from "react-router-dom";

function Widget() {
	const params = useParams();
	const widgetName = params.name;

    return(
        <div>{widgetName}</div>
    );

}

export default Widget;