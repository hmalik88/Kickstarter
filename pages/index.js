import React from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';

export default class CampaignIndex extends React.Component {

    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns }
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true
            }
        })

        return <Card.Group items={items} />
    }


    render() {
        return (
        <div>
            <Layout>
            <h3>Open Campaigns</h3>
            <Button 
                floated="right"
                content="Create campaign"
                icon="add"
                primary
            />
            {this.renderCampaigns()}
            </Layout>
        </div>
            )
    }
}