import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import SelectedAppDialog from "./components/SelectedAppDialog";
import AppCard from "./components/AppCard";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import DrawerContainer from "./components/DrawerContainer";
import data from "./data/apps";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

export interface AppData {
  id: number;
  name: string;
  url: string;
  logo: string;
}

function App() {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();
  // const [apps, setApps] = useState<AppData[]>([]);
  const [selectedApp, setSelectedApp] = useState<AppData | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (isAuthenticated) {
  //         const accessToken = await getAccessTokenSilently();
  //         const resp = await axios.get(
  //           "https://getapps.withrowcamden.workers.dev",
  //           {
  //             method: "GET",
  //             headers: {
  //               Authorization: `Bearer ${accessToken}`,
  //             },
  //           }
  //         );
  //         setApps(resp.data);
  //       }
  //     } catch (error) {
  //       console.log("ERROR", error);
  //     }
  //   };
  //   fetchData();
  // }, [isAuthenticated]);

  return (
    <Background>
      <div className="w-full h-screen">
        <Navbar isAuthenticated={isAuthenticated} />
        {isLoading ? (
          <div className="w-full h-full flex justify-center items-center">
            <LoadingSpinner />
          </div>
        ) : (
          isAuthenticated && (
            <>
              <DrawerContainer>
                {data.map((app) => (
                  <AppCard
                    key={app.id}
                    appData={app}
                    setSelectedApp={setSelectedApp}
                  />
                ))}
              </DrawerContainer>
              <SelectedAppDialog
                selectedApp={selectedApp}
                setSelectedApp={setSelectedApp}
              />
            </>
          )
        )}
      </div>
    </Background>
  );
}

export default App;
