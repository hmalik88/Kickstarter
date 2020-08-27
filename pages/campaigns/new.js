import React from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

export default class CampaignNew extends React.Component {
    state = {
        minimumContribution: ''
    }

    onSubmit = async e => {
        e.preventDefault();
        const accounts = await web3.eth.getAccounts();
        await factory.methods
            .createCampaign(this.state.minimumContribution)
            .send({
                from: accounts[0]
            });
    }

    render() {
        return (
            <Layout>
                <h3>Create a Campaign</h3>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input 
                            label="wei" 
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={e => this.setState({minimumContribution: e.target.value})} 
                        />
                    </Form.Field>
                    <Button primary>Create</Button>
                </Form>
            </Layout>
        );
    }
}