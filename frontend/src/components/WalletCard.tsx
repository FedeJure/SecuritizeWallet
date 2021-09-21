import { Button, Card } from "semantic-ui-react";

interface Payload {
    address: string
    favorite: boolean
    onSetFavorite: Function
    old: boolean
}

export const WalletCard = ({ address, favorite, onSetFavorite, old }: Payload) => (

    <Card fluid>
        <Card.Content textAlign="center">
            <Button
                onClick={() => onSetFavorite()}
                floated="right"
                icon={favorite ? "star" : "star outline"}
                circular
                color={favorite ? "orange" : undefined}
                compact />
            <Card.Header content={address} />
            {old && <Card.Meta content="Old" />}
            <Card.Description content='Jake is a drummer living in New York.' />
        </Card.Content>
    </Card>
)