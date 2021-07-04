import React from "react";
import NumberFormat from "react-number-format";

class MyNumberInput extends React.Component {
    state = {
        value: '',
    };
    render() {
        return (
            <NumberFormat
                placeholder="Number Format Input looses focus"
                isNumericString={true}
                thousandSeparator={false}
                decimalScale={0}
                allowLeadingZeros={true}
                allowNegative={false}
                value={this.state.value}
                onValueChange={vals => this.setState({ value: vals.value })}
                {...this.props}
            />
        );
    }
}

export default MyNumberInput;