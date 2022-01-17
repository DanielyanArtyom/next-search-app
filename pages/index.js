import { useDispatch, useSelector } from 'react-redux'
import { GithubElement, Header, Loader, Button } from '../components'
import { fetchResults } from '../redux/searchReducer/searchActions'

// export const getServerSideProps = wrapper.getServerSideProps(store => ({ req, res, ...etc }) => {
//   store.dispatch(fetchResults());
// });

export default function Home() {
  const { results, totalCount, page, searchValue, isFetching, error } = useSelector(state => state.search)
  const dispatch = useDispatch()

  const paginate = () => {
    dispatch(fetchResults(searchValue, ++page, true))
  }

  const countOfElements = (total, length) => {
    const count = total - length

    if (!count) {
      return `No More`
    }
    return count > 5 ?
      `add 5 of ${count}` : `add ${count} of ${count}`
  }

  return (
    <div className='container'>

      <Header />
      <main className='u-text-align-center'>

        <Button clickHandler={paginate} disabled={totalCount === results.length}>
          {countOfElements(totalCount, results.length)}
        </Button>

        {
          isFetching ? (
            <Loader />
          ) : (
            results.length ? (
              <ul className='results'>
                {
                  results.map(({ id, clone_url, full_name, owner }) => (
                    <GithubElement key={id} img={owner.avatar_url} fullName={full_name} login={owner.login} link={clone_url} />
                  ))
                }
              </ul>
            )
              : (
                <p className='nothing-text'>{error ? error : 'nothing yet'}</p>
              )
          )
        }

      </main>

    </div >
  )
}
