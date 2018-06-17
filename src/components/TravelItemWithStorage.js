/* Example of a higher order component. The generator function
'withStorage' is called with the TravelItem-component and a configuration-
object. The function returns a new component which is then exported
*/

import withStorage from '../components/hoc/withStorage'
import TravelItem from '../pages/TravelItem'

const TravelItemWithStorage = withStorage(TravelItem, {
  getterName: 'travel/getTravelItemById',
  deleteActionName: 'travel/deleteItem'
})

export default TravelItemWithStorage
