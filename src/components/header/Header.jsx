import {
  HeaderContainer,
  MainHeader,
  FoodInput,
  FormContainer,
} from "./Header.style";

const Header = () => {
  return;
  <HeaderContainer>
    <MainHeader>Recipe App</MainHeader>

    <FormContainer>
      <FoodInput
        type="text"
        placeholder="search"
        onChange={(e) => e.target.value}
      ></FoodInput>
    </FormContainer>
  </HeaderContainer>;
};

export default Header;
