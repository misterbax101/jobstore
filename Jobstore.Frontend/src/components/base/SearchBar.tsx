import React from 'react';
import { DebounceInput } from 'react-debounce-input';
import { InputGroup, InputGroupAddon } from 'reactstrap';

interface SearchBarProps {
    onChnage: (text: string) => void;
    className?: string,
    placeholder?: string,
    size?: 'sm' | 'md' | 'lg'
}

const SearchBar: React.FC<SearchBarProps> = ({ onChnage, className, placeholder = 'Search...' , size = 'md'}) => {
    return (
        <InputGroup
            size={size}
            className={className}>
            <DebounceInput 
               minLength={2}
               debounceTimeout={150}
               className="form-control"
               placeholder={placeholder}
               onChange={event => onChnage(event.target.value)} />
            <InputGroupAddon addonType='append' >
                <span className="input-group-text amber lighten-3" id="basic-text1">
                    <svg className="bi bi-search" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12.442 12.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"></path>
                        <path fill-rule="evenodd" d="M8.5 14a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM15 8.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"></path>
                    </svg></span>
            </InputGroupAddon>
        </InputGroup>
    )
}

export default SearchBar;
