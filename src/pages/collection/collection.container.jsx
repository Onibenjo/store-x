import {connect} from 'react-redux';
import {compose} from 'redux';
import { createStructuredSelector } from "reselect";
import { selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";
import CollectionPage from "./collection.component";
import WithSpinner from "./../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoaded: state => !selectIsCollectionLoaded(state)
});

const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionsPageContainer;
