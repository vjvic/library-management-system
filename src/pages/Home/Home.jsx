import Button from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";
import Dropdown from "../../components/Select/Dropdown";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  return (
    <div>
      <SearchBar
        placeholder={"Search for title, author, ISBN, publisher, md5"}
      />
      <Button>hello</Button>
      <Checkbox
        label="Default Checkbox "
        checked
        onChange={(e) => console.log(e.target.checked)}
      />
      <Dropdown
        options={["Filters", "Filter", "Filter"]}
        bordered={false}
        placeholder="Filter"
      />
    </div>
  );
};

export default Home;
