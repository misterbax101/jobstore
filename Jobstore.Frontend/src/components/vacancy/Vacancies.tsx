import React from 'react';
import { Row, Col } from 'reactstrap';

import { VacancyModel, VacancyType, VacanciesQuery } from '../../types';
import VacanciesList from './vacanciesList/VacanciesList';
import Filters from './Filters';
import Paginator from '../../components/base/Paginator';
import Spinner from '../../components/base/Spinner';

interface VacanciesProps {
    vacancies: Array<VacancyModel>,
    loading: boolean,
    totalCount: number,
    currentPage: number,
    vacancyTypes: Array<VacancyType>,
    getVacancies: (pageIndex?: number, query?: VacanciesQuery) => Promise<void>,
    getVacancyTypes: () => void
}


class Vacancies extends React.Component<VacanciesProps> {
    componentDidMount() {
        const { getVacancies, getVacancyTypes, vacancyTypes } = this.props;
        getVacancies();
        if (!vacancyTypes || vacancyTypes.length === 0) {
            getVacancyTypes();
        }
    }

    filtersChanged = (query: VacanciesQuery) => {
        this.props.getVacancies(1, query);
    }

    render() {
        const { totalCount, currentPage, getVacancies, vacancyTypes, loading, vacancies } = this.props;

        return (
            <Row>
                <Col md={{ size: 3 }} className="p-0">
                    <Filters
                        vacancyTypes={vacancyTypes}
                        onFiltersChanged={this.filtersChanged}
                    />
                </Col>
                <Col>
                    <Spinner loading={loading} />
                    <VacanciesList vacancies={vacancies} />
                    {!loading && 
                        <Paginator
                        className="justify-content-center mt-1 mb-1"
                        itemsCount={totalCount}
                        currentPage={currentPage}
                        onPageChange={(page: number) => getVacancies(page)} />}
                </Col>
            </Row>
        )
    }
}

export default Vacancies;