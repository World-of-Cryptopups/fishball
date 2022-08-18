import { fs, path } from "@tauri-apps/api";
import { BaseDirectory } from "@tauri-apps/api/fs";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface SettingsProviderProps {
  children: ReactNode;
}

interface SettingsContextProps {
  save: (newEndpoint: string) => Promise<void>;
  //   read: () => Promise<void>;
  endpoint: string;
}

const SettingsContext = createContext<SettingsContextProps>({
  save: async () => {},
  //   read: async () => {},
  endpoint: "",
});

const defaultConfig = {
  endpoint: "https://eos.greymass.com",
};

const initializeConfig = async () => {
  const configDir = await path.configDir();
  await fs.createDir("fishball", { dir: BaseDirectory.Config });
  const configPath = await path.join(configDir, "fishball");

  try {
    const configFile = await path.join(configPath, "settings.json");

    return configFile;
  } catch (e) {
    await fs.writeFile({
      contents: JSON.stringify(defaultConfig),
      path: "fishball/settings.json",
    });
  }

  return await path.join(configPath, "settings.json");
};

const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [endpoint, setEndpoint] = useState("");

  const save = async (newEndpoint: string) => {
    if (newEndpoint === "") return;
    if (newEndpoint === endpoint) return;

    // save new endpoint file
    await fs.writeFile(
      {
        contents: JSON.stringify({
          endpoint: newEndpoint,
        }),
        path: "fishball/settings.json",
      },
      { dir: BaseDirectory.Config }
    );

    // set new endpoint
    setEndpoint(newEndpoint);
  };

  useEffect(() => {
    const readConfig = async () => {
      const configDir = await path.configDir();

      // try to create the config dir
      await fs
        .createDir("fishball", { dir: BaseDirectory.Config })
        .then((r) => {
          console.log("asdasd");
        })
        .catch((e) => {
          // folder dir exists
        });

      // get the config path
      const configPath = await path.join(configDir, "fishball");

      let configFile = "";

      await fs
        .writeFile(
          {
            contents: JSON.stringify(defaultConfig),
            path: "fishball/settings.json",
          },
          { dir: BaseDirectory.Config }
        )
        .catch((e) => {
          // file exists error should be in here
        });

      configFile = await path.join(configPath, "settings.json");

      // read the config then
      const config = await fs.readTextFile(configFile);

      setEndpoint(JSON.parse(config).endpoint);
    };

    if (window && endpoint === "") {
      readConfig();
    }
  }, [endpoint]);

  return (
    <SettingsContext.Provider value={{ save, endpoint }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined)
    throw new Error("<SettingsProvider></SettingsProvider>");

  return context;
};

export default SettingsProvider;
