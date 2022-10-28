import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';

const Container = styled.div`

`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Cycling Gear</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select>
                    <Option disabled selected>Category</Option>
                    <Option>Locks</Option>
                    <Option>Bikes</Option>
                    <Option>Clothes</Option>
                    <Option>Accessories</Option>
                    <Option>Maps</Option>
                </Select>
    
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>Larger Sizes</Option>
                </Select>
            </Filter>

            <Filter>
                <FilterText>Sort Products</FilterText>
                <Select>
                    <Option disabled selected>General</Option>
                    <Option>Popularity</Option>
                    <Option>Price(Low-High)</Option>
                    <Option>Price (High-Low)</Option>
                    <Option>Suggested</Option>
                </Select>
            </Filter>

        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList