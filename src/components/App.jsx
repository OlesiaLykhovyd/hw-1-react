import Section from './Section/Section';
import UserProfile from './User-profile/UserProfile';
import user from 'data/user.json';
import Statistics from './Statistics/Statistics';
import stats from 'data/statistics';
import friends from 'data/friends';
import FriendsList from './Friends-list/FriendsList';
import transactions from 'data/transactions';
import TransactionHistory from './Transaction-history/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Section>
        <UserProfile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section>
        <Statistics title="Upload stats" stats={stats} />
      </Section>

      <Section>
        <FriendsList friends={friends} />
      </Section>

      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
};
