import AnalyticsBody from "../components/Analytics/AnalyticsBody"
import AnalyticsNav from "../components/Analytics/AnalyticsNav"

const Analytics = () => {
  return (
    <div className=" w-full">
        <AnalyticsNav/>
        <main className=" mx-auto p-5">
            <AnalyticsBody/>
        </main>
    </div>
  )
}

export default Analytics