import { useSelector } from 'react-redux'
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import SortDropdown from '../../atoms/SortDropdown'
import GameCard06 from '../../molecules/GameCard06'
import { RootState } from '../../../redux/store'

export interface IWishlistProps {}

const Wishlist = () => {
  const games = useSelector((state: RootState) => state.games)
  const publishers = useSelector((state: RootState) => state.publishers)

  return (
    <AmplifyAuthenticator>
      <div>
        <AmplifySignOut />
        <hr />
        Games: {JSON.stringify(games)}
        <hr />
        Publishers: {JSON.stringify(publishers)}
        <div className='flex items-center justify-between'>
          <SortDropdown
            sortByOptions={[
              'On Sale',
              'Recently Added',
              'Alphabetical',
              'Price: Low to High',
              'Price: High to Low',
            ]}
          />
          <div className='p-2'>Items (5)</div>
        </div>
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
          <GameCard06
            date='2021-06-10T08:30:00Z'
            displayImage='static/media/game.e4f1f703.jpg'
            gameTitle='Cyberpunk 2077'
            price={{
              discount: 10,
              price: 4.99,
            }}
            productionCompany='CD PROJEKT RED'
            review='An open world you can get lost in and continue finding new things to do. An open world you can get lost in and continue finding new things to do'
          />
          <GameCard06
            date='2021-06-10T08:30:00Z'
            displayImage='static/media/game.e4f1f703.jpg'
            gameTitle='Cyberpunk 2077'
            price={{
              discount: 10,
              price: 4.99,
            }}
            productionCompany='CD PROJEKT RED'
            review='An open world you can get lost in and continue finding new things to do. An open world you can get lost in and continue finding new things to do'
          />
          <GameCard06
            date='2021-06-10T08:30:00Z'
            displayImage='static/media/game.e4f1f703.jpg'
            gameTitle='Cyberpunk 2077'
            price={{
              discount: 10,
              price: 4.99,
            }}
            productionCompany='CD PROJEKT RED'
            review='An open world you can get lost in and continue finding new things to do. An open world you can get lost in and continue finding new things to do'
          />
          <GameCard06
            date='2021-06-10T08:30:00Z'
            displayImage='static/media/game.e4f1f703.jpg'
            gameTitle='Cyberpunk 2077'
            price={{
              discount: 10,
              price: 4.99,
            }}
            productionCompany='CD PROJEKT RED'
            review='An open world you can get lost in and continue finding new things to do. An open world you can get lost in and continue finding new things to do'
          />
          <GameCard06
            date='2021-06-10T08:30:00Z'
            displayImage='static/media/game.e4f1f703.jpg'
            gameTitle='Cyberpunk 2077'
            price={{
              discount: 10,
              price: 4.99,
            }}
            productionCompany='CD PROJEKT RED'
            review='An open world you can get lost in and continue finding new things to do. An open world you can get lost in and continue finding new things to do'
          />
        </div>
      </div>
    </AmplifyAuthenticator>
  )
}

export default Wishlist
