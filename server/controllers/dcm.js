import User from '../models/User.js';
import OverallStat from '../models/OverallStat.js';

export const getUser = async(req,res)=>{
    try{
        const id = req.params.id;
        const user = await User.findById(id);
        res.status(200).json(user);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}
export const getDashboard = async(req,res)=>{
    try{
    const currentMonth = "November";
    const currentYear = 2021;
    const currentDay = "2021-11-15";

    const overallStat = await OverallStat.find({ year: currentYear });

    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
    } = overallStat[0];

    const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
      return month === currentMonth;
    });

    const todayStats = overallStat[0].dailyData.find(({ date }) => {
      return date === currentDay;
    });

    res.status(200).json({
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
      thisMonthStats,
      todayStats,
    });

    }catch(err){
        res.status(404).json({message: err.message});
    }
}