import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import SearchBar from '../components/Home/SearchBar';
import DropdownFilter from '../components/Home/DropdownFilter';
import Countries from '../components/Home/Countries';

import { PageContainer, Main } from '../assets/styles/GlobalStyles';
import { SearchFilterContainer } from '../assets/styles/pages/HomeStyles';

function Home() {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('');
  const [regionSelect, setRegionSelect] = useState('All');
  const [countriesArray, setCountriesArray] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: 'https://restcountries.eu/rest/v2/all',
        });
        setCountriesArray(data);
      } catch (error) {}
    }
    load();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'searchTerm':
        setSearchTerm(value);
        break;
      case 'regionSelect':
        setRegionSelect(value);
        break;
      default:
        break;
    }
  };

  const handleClick = (name) => {
    history.push(`/detail/${name}`);
  };

  const searchTermFilter = (val) => {
    if (searchTerm === '') {
      return val;
    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
  };

  const regionFilter = (val) => {
    if (regionSelect === 'All') {
      return val;
    }
    if (regionSelect === val.region) {
      return val;
    }
  };

  const truncate = (input) =>
    input.length > 20 ? `${input.substring(0, 20)}...` : input;

  return (
    <PageContainer>
      <Main>
        <SearchFilterContainer>
          <SearchBar searchTerm={searchTerm} handleChange={handleChange} />
          <DropdownFilter
            regionSelect={regionSelect}
            handleChange={handleChange}
          />
        </SearchFilterContainer>
        <Countries
          countriesArray={countriesArray}
          searchTermFilter={searchTermFilter}
          regionFilter={regionFilter}
          handleClick={handleClick}
          truncate={truncate}
        />
      </Main>
    </PageContainer>
  );
}

export default Home;
