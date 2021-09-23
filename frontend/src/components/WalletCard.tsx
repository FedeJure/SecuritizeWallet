import { Button, Card } from "semantic-ui-react";

interface Payload {
    address: string
    favorite: boolean
    onSetFavorite: Function
    old: boolean
}

export const WalletCard = ({ address, favorite, onSetFavorite, old }: Payload) => (

    <Card centered >
        <Card.Content textAlign="center">
            <Button
                onClick={(e) => {
                    e.stopPropagation()
                    onSetFavorite()
                }}
                floated="right"
                icon={favorite ? "star" : "star outline"}
                circular
                color={favorite ? "orange" : undefined}
                compact />
            <Card.Header >
                <h3 style={{wordBreak: "break-all"}}>{address}</h3>
            </Card.Header>
            {old && <Card.Meta content="Old" />}
        </Card.Content>
    </Card>
)