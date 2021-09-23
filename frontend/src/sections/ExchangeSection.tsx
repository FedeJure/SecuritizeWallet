import { useState } from "react";
import { Button, Form, Input, Statistic } from "semantic-ui-react"

export const ExchangeSection = () => {
    const [dollarSelected, setDollarSelected] = useState(true)

    const numberStyle = { fontSize: "2em", color: "lightgray", height: "100%", margin: "0.5em" };
    return <div style={{ alignItems: "center", display: "flex" }}>
        <Form>
            <Form.Field inline style={{ alignItems: "center", display: "flex" }}>
                <span style={numberStyle}>1 ETH</span>
                <span style={numberStyle}> = </span>
                <Input labelPosition="right" label={{ basic: true, content: dollarSelected ? '$' : "€",  }} style={{marginRight: "1em"}}/>
                <Button.Group>
                    <Button
                        onClick={() => setDollarSelected(true)}
                        positive={dollarSelected}
                        secondary={!dollarSelected}
                        icon="dollar"></Button>
                    <Button
                        onClick={() => setDollarSelected(false)}
                        secondary={dollarSelected}
                        primary={!dollarSelected}
                        icon="euro"></Button>
                </Button.Group> 
            </Form.Field>
        </Form>
        
        <Button style={{marginLeft: "3em"}} circular icon="redo" inverted/>

    </div>
}