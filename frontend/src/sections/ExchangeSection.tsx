import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Button, Form, Input } from "semantic-ui-react"
import { loadRatesAction, setDollarRate, setEuroRate } from "../modules/exchanger/exchange.actions";
import { getDollarRate, getEuroRate } from "../modules/exchanger/exchange.selectors";
import { StoreState } from "../store";

const mapStateToProps = (state: StoreState) => {
    return {
        dollarRate: getDollarRate(state),
        euroRate: getEuroRate(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setDollarRate: (rate: number) => setDollarRate(rate)(dispatch),
        setEuroRate: (rate: number) => setEuroRate(rate)(dispatch),
        loadRates: () => loadRatesAction()(dispatch)
    }
}

interface Payload {
    dollarRate: number,
    euroRate: number,
    setDollarRate: (rate: number) => void
    setEuroRate: (rate: number) => void,
    loadRates: () => void
}

export const ExchangeSection = connect(mapStateToProps, mapDispatchToProps)(
    ({ dollarRate, euroRate, setDollarRate, setEuroRate, loadRates }: Payload) => {
        const [dollarSelected, setDollarSelected] = useState(true)
        const numberStyle = { fontSize: "2em", color: "lightgray", height: "100%", margin: "0.5em" };

        useEffect(() => {
            loadRates()
        }, [])

        const handleRestore = () => {
            loadRates()
        }

        const handleChange = (value: string) => {
            const numberValue = parseFloat(value) || 0
            if (dollarSelected && numberValue !== dollarRate) setDollarRate(numberValue)
            else if (!dollarSelected && numberValue !== euroRate) setEuroRate(numberValue)

        }

        return <div style={{ alignItems: "center", display: "flex" }}>
            <Form>
                <Form.Field inline style={{ alignItems: "center", display: "flex" }}>
                    <span style={numberStyle}>1 ETH</span>
                    <span style={numberStyle}> = </span>
                    <Input
                        type="number"
                        onChange={(e, v) => handleChange(v.value)}
                        value={dollarSelected ? dollarRate : euroRate}
                        labelPosition="right"
                        label={{ basic: true, content: dollarSelected ? '$' : "€", }}
                        style={{ marginRight: "1em" }} />
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

            <Button onClick={handleRestore} style={{ marginLeft: "3em" }} circular icon="redo" inverted />

        </div>
    })