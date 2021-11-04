import styles from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/selectors";
import * as actions from "../../redux/actions";

//TOOLKIT - 2
export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = (event) => dispatch(actions.changeFilter(event.target.value));

  return (
    <input
      onChange={onChange}
      type="text"
      name="filter"
      id="filter"
      value={value}
      className={styles.filter}
      placeholder="Enter name to find"
    ></input>
  );
}

//REDUX - 1
// import { connect } from 'react-redux';

// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: event => dispatch(actions.changeFilter(event.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
