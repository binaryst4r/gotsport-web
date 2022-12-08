import { useAuth } from 'providers/AuthContext'
import { useQuery } from '@tanstack/react-query'
import { makeApiRequest } from 'utils/api'
import { InputOption, SelectInput, TextInput } from 'components/forms'
import { Container } from 'components/layout'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Button } from 'components/buttons'
import { Heading } from 'components/typography/Heading'
import groupBy from 'lodash/groupBy'
import {format} from 'date-fns'
import { Badge } from 'components/badges'
import { MobilePaymentTable } from './MobilePaymentTable'
import { DesktopPaymentTable } from './DesktopPaymentTable'

export const Payments = () => {
  const { user } = useAuth()
  const { data, isLoading, refetch, isFetching } = useQuery(
    ['payments'],
    () => makeApiRequest({ path: `/payments`, params: { user_id: user?.id } }),
    {
      refetchOnWindowFocus: false,
    }
  )

  const payments = groupBy(data?.data, (payment) => payment.settled_at)

  if (!payments) {
    return null
  }
  console.log(payments)

  return (
    <div>
      <PaymentSearchBar />
      <div className='sm:hidden'>
        <MobilePaymentTable payments={payments} />
      </div>

      <div className='sm:block hidden'>
        <DesktopPaymentTable payments={payments} />
      </div>
    </div>
  )
}

const PaymentSearchBar = () => {
  const inputOptions: InputOption[] = [
    {
      name: 'some filter',
      value: 'some filter',
      display: 'Some Filter'
    }
  ]
  return (
    <Container>
      <div className='flex justify-between items-center h-20'>
        <SelectInput placeholder="Filter" initialValue={null} options={inputOptions} onSelect={(selected) => console.log(selected)} />
        <div className='ml-2 sm:ml-0 flex items-center'>
          <TextInput className='rounded-tr-none rounded-br-none' type='text' name='search' placeholder='Search Transactions' />
          <Button className='px-3 rounded-tl-none rounded-bl-none' variant='gray'>
            <MagnifyingGlassIcon className='h-6' />
          </Button>
        </div>
      </div>
    </Container>
  )
}
