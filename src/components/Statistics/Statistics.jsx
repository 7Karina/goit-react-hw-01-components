import React from 'react';
import {
  StatisticsSection,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';
import { getRandomHexColor } from './helpers/getRandomHexColor';

const Statistics = ({ stats }) => {
  return (
    <StatisticsSection>
      <Title>Upload stats</Title>
      <StatList>
        {stats.map(stat => (
          <StatItem
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
};

export default Statistics;
