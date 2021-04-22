import React from "react";

//include images into your bundle
import { ToDo } from "./ToDo";

//create your first component
export function Home() {
	return (
		<div>
			<ToDo />
		</div>
	);
}
