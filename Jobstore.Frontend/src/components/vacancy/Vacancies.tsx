import React from 'react';
import { Row, Col, Button } from 'reactstrap';

import { VacancyModel, VacancyType, VacanciesQuery } from '../../types';
import Filters from './Filters';
import Paginator from '../../components/base/Paginator';
import Spinner from '../../components/base/Spinner';
import ModelConfirmation from '../../components/base/ModelConfirmation';

interface VacanciesProps {
    vacancies: Array<VacancyModel>,
    loading: boolean,
    totalCount: number,
    vacancyTypes: Array<VacancyType>
    getVacancies: (pageIndex: number, pageSize: number, query?: VacanciesQuery) => Promise<void>,
    getVacancyTypes: () => void
}

const PAGE_SIZE = 5;

class VacanciesList extends React.Component<VacanciesListProps> {
    state = {
        show: false
    };
    componentDidMount() {
        const { getVacancies, getVacancyTypes, vacancyTypes } = this.props;
        getVacancies(1, PAGE_SIZE);
        if (!vacancyTypes || vacancyTypes.length === 0) {
            getVacancyTypes();
        }
    }

    
    renderList() {
        return this.props.vacancies.map(vacancy =>
            <VacanciesListItem
                key={vacancy.id}
                className="mb-1"
                vacancy={vacancy} />);
    }

    filtersChanged = (query: VacanciesQuery) => {
        this.props.getVacancies(1, PAGE_SIZE, query);
    }

    render() {
        const { totalCount, getVacancies, vacancyTypes, loading } = this.props;

        return (
            <Row>
            <ModelConfirmation 
               show= {this.state.show}
               onClose ={() => console.log('closed')}
               onConfirm ={() => console.log('confirmed')}/>
                <Col md={{ size: 3 }} className="p-0">
                    <Filters
                        vacancyTypes={vacancyTypes}
                        onFiltersChanged={this.filtersChanged}
                    />
            <Button  onClick= {() => this.setState({show:true})}>Show</Button>

                </Col>
                <Col>
                    <Spinner loading={loading} />
                     <VacanciesList vacancies={vacancies}/>
                    <Paginator
                        className="justify-content-center mt-1 mb-1"
                        itemsCount={totalCount}
                        onPageChange={(page: number) => getVacancies(page, PAGE_SIZE)} />
                </Col>
            </Row>
        )
    }
}

export default Vacancies;


