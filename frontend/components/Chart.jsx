import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles';
import { PieChart } from 'react-native-chart-kit';

const screenWidth=Dimensions.get('screen').width -60-70;

const Chart = ({inStock=0,outStock=0}) => {


    const data = [
        {
          name: "Out Of Stock",
          population: outStock,
          color: colors.color2,
          legendFontColor: colors.color2,
        },

        {
          name: "In Stock",
          population: inStock,
          color: colors.color1_light2,
          legendFontColor:colors.color2,
        },
  
        
      ];

      const chartConfig = {
        color: (opacity = 1) => `rgba(26,255,146,${opacity})`,
      };

  return (
    <View

 style={{
    borderRadius:10,
 }}
     >
        <PieChart
            data={data}
            width={screenWidth}
            height={120}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={colors.color3}

            absolute
        />
    </View>
  )
}

export default Chart