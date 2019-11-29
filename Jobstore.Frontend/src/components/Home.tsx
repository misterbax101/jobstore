import React from 'react';

import { Row, Col } from 'reactstrap';
import { VacancyModel } from './../types';
import Spinner from './base/Spinner';
import SearchBar from './base/SearchBar';
import VacanciesList from './vacancy/vacanciesList/VacanciesList';

interface HomeProps {
    vacancies: Array<VacancyModel>
    loading: boolean,
    searchVacancies: (query?: string) => void
}

class Home extends React.Component<HomeProps, {}> {
    componentDidMount() {
        this.props.searchVacancies();
    }

    onFilterChnaged = (value: string) => {
        this.props.searchVacancies(value);
    }

    render() {
        const { vacancies, loading } = this.props;
        return (
            <>
                <Row>
                    <Col >
                        <SearchBar
                            size='lg'
                            onChnage={this.onFilterChnaged}
                            className="mb-1" />
                        <Spinner loading={loading} />
                        <VacanciesList
                            vacancies={vacancies} />
                    </Col>
                </Row>
            </>
        );
    }
}

export default Home;