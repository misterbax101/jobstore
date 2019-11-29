import React from 'react';

import { Card, CardTitle, CardHeader, CardBody, CardText } from 'reactstrap';

const About: React.FC = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle
                    tag="h5"
                    className="text-primary mb-0">
                    Jobstore.com ‐ Job Distribution Platform
                </CardTitle>
            </CardHeader>
            <CardBody>
                <CardText className="lead">
                    Our Story
        First launched in New York. Jobstore is one of the largest job distribution platform which offers services in over 10 countries.
        It's the simplest way for employers & recruiters to post jobs on multiple job sites, classified ads and social network sites with ONE submission, fulfilling the need to get the right talent while minimizing the cost.
        We aim to be the biggest global job distribution platform with support from 100+ job sites and social networks.
            </CardText>
            </CardBody>
        </Card>
    );
}

export default About;