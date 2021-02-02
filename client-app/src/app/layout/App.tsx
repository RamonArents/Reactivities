import React, { useEffect, Fragment, useContext } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import LoadingComponent from "./LoadingComponent";
import ActivityStore from "../stores/activityStore";
import { observer } from "mobx-react-lite";

const App = () => {
  const activityStore = useContext(ActivityStore);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]); //runs one time only. Removing the empty array will cause an infinite loop

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading activities..." />;

  return (
    //you can use a fragment that is not displayed as element (in dev tools). This makes the code cleaner
    //you can use ! after a selected attribute to avoid strong typing. It is better to declare the type in the interface of ActivityDashboard.
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard />
      </Container>
    </Fragment>
  );
};

export default observer(App);
