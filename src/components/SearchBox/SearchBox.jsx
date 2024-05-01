import {useSelector,useDispatch} from 'react-redux'
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice'

const SearchBox = () => {
     
    const dispatch = useDispatch();
    const filters = useSelector(selectNameFilter);
    const onChangeFilter = (event) => {
        dispatch(changeFilter(event.target.value))
  }

    return (
        <label >Find contacts by name
            <input type="text" value={filters} onChange={onChangeFilter}/></label> 
  )
}

export default SearchBox