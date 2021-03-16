import styled from 'styled-components';

export const SelectContainer = styled.div`
  display: inherit;
  flex-direction: row-reverse;
  align-items: center;
  width: 10.4vw;
  height: 53px;
`;

export const SelectRegion = styled.select`
  height: 100%;
  width: 100%;
  padding-left: 10%;
  background-repeat: no-repeat;
  background-size: 23px 23px;
  background-position: 28px 16px;
  font-size: 0.84em;
  border: none;
  border-radius: 6px;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.08);
  outline: none;
  & > select {
  }
`;

function DropdownFilter({ handleChange, regionSelect }) {
  return (
    <SelectContainer>
      <SelectRegion
        name="regionSelect"
        onChange={handleChange}
        value={regionSelect}
      >
        <option value="All">Select by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </SelectRegion>
    </SelectContainer>
  );
}

export default DropdownFilter;
