import React from 'react';
import { Row, Col } from 'reactstrap';

import { VacancyModel, VacancyType, VacanciesQuery } from '../../types';
import VacanciesListItem from './VacanciesListItem';
import Filters from './Filters';
import Paginator from '../../components/base/Paginator';
import Spinner from '../../components/base/Spinner';

interface VacanciesListProps {
    vacancies: Array<VacancyModel>,
    loading: boolean,
    pagesCount: number,
    vacancyTypes: Array<VacancyType>
    getVacancies: (pageIndex?: number, query?: VacanciesQuery) => Promise<void>,
    getVacancyTypes: () => void
}

class VacanciesList extends React.Component<VacanciesListProps> {
    componentDidMount() {
        this.props.getVacancies();
        this.props.getVacancyTypes();
    }

    renderList() {
        if (this.props.loading) {
            return <Spinner />;
        }
        return this.props.vacancies.map(vacancy =>
            <VacanciesListItem vacancy={vacancy} />);
    }

    filtersChanged = (query: VacanciesQuery) => {
        this.props.getVacancies(1, query);
    }

    render() {
        const { pagesCount, getVacancies, vacancies, vacancyTypes } = this.props;

        return (
            <Row className="mt-2 mb-2">
                <Col md={{ size: 3 }} className="p-0">
                    <Filters
                        vacancyTypes={vacancyTypes}
                        onFiltersChanged={this.filtersChanged}
                    />
                </Col>
                <Col>
                    {this.renderList()}
                    <Paginator
                        className="justify-content-center mt-1 mb-1"
                        pagesCount={pagesCount}
                        onPageChange={(page: number) => getVacancies(page)} />
                </Col>
            </Row>
        )
    }
}

export default VacanciesList;


