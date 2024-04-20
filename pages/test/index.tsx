import { useDefaultLayout } from '@/hooks/useDefaultLayout'
import { NextPageWithLayout } from '@/utils/types'
import React from 'react'

const TestHome: NextPageWithLayout = () => {
  return (
    <div>TestHome</div>
  )
}

TestHome.getLayout = useDefaultLayout;
export default TestHome