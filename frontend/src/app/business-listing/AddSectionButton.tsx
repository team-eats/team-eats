

import React from "react";
import {Props} from "next/script";

const AddSectionButton = (props: Props) => {
    return (
        <button>{props.text}</button>
    );
}

export default AddSectionButton;
