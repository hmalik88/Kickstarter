import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

export default class RequestRow extends React.Component {

    onApprove = async e => {
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.approvalRequest(this.props.id).send({from: accounts[0]});
    }

    onFinalize = async e => {
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        console.log(this.props.id)
        await campaign.methods.finalizeRequest(this.props.id).send({
            from: accounts[0]
        });
    }


    render() {
        const { Row, Cell } = Table;
        const { id, request, approversCount } = this.props;
        return(
           <Row>
               <Cell>{id}</Cell>
               <Cell>{request.description}</Cell>
               <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
               <Cell>{request.recipient}</Cell>
               <Cell>{request.approvalCount} / {approversCount}</Cell>
               <Cell>
                   <Button color="green" basic onClick={this.onApprove}>
                       Approve
                   </Button>
               </Cell>
               <Cell>
                   <Button color="teal" basic onClick={this.onFinalize}>
                       Finalize
                   </Button>
               </Cell>
           </Row>
        )
    }
}