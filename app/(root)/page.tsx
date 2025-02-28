import HeaderBox from '@/components/ui/HeaderBox.tsx'
import TotalBalanceBox from '@/components/TotalBalanceBox.tsx'
const Home = () => {
  const loggedIn={firstName:"Deepesh"};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Access and Manage your account and Transactions efficiently"
          />
          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.50}/>

        </header>

        </div>
    </section>
          
  )
}

export default Home