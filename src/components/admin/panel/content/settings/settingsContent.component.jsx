import React, { Component } from "react";

import SettingsList from "../settingsList.component";

export default class SettingsContent extends Component {
  settings = [
    {
      settingName: "Themes",
      description: "Set the color theme of the website.",
      status: "off",
      path: "/",
      subSettings: [
        {
          settingName: "Dark Mode",
          status: "off"
        },
        {
          settingName: "Change Currency",
          status: "off"
        }
      ]
    },
    {
      settingName: "Themes",
      description: "Set the color theme of the website.",
      status: "off",
      path: "/",
      subSettings: [
        {
          settingName: "Dark Mode",
          status: "off"
        },
        {
          settingName: "Change Currency",
          status: "off"
        }
      ]
    },
    {
      settingName: "Themes",
      description: "Set the color theme of the website.",
      status: "off",
      path: "/",
      subSettings: [
        {
          settingName: "Dark Mode",
          status: "off"
        },
        {
          settingName: "Change Currency",
          status: "off"
        }
      ]
    },
    {
      settingName: "Themes",
      description: "Set the color theme of the website.",
      status: "off",
      path: "/",
      subSettings: [
        {
          settingName: "Dark Mode",
          status: "off"
        },
        {
          settingName: "Change Currency",
          status: "off"
        }
      ]
    },
    {
      settingName: "Themes",
      description: "Set the color theme of the website.",
      status: "off",
      path: "/",
      subSettings: [
        {
          settingName: "Dark Mode",
          status: "off"
        },
        {
          settingName: "Change Currency",
          status: "off"
        }
      ]
    },
    {
      settingName: "Themes",
      description: "Set the color theme of the website.",
      status: "off",
      path: "/",
      subSettings: [
        {
          settingName: "Dark Mode",
          status: "off"
        },
        {
          settingName: "Change Currency",
          status: "off"
        }
      ]
    },
    {
      settingName: "Themes",
      description: "Set the color theme of the website.",
      status: "off",
      path: "/",
      subSettings: [
        {
          settingName: "Dark Mode",
          status: "off"
        },
        {
          settingName: "Change Currency",
          status: "off"
        }
      ]
    },
    {
      settingName: "Themes",
      description: "Set the color theme of the website.",
      status: "off",
      path: "/",
      subSettings: [
        {
          settingName: "Dark Mode",
          status: "off"
        },
        {
          settingName: "Change Currency",
          status: "off"
        }
      ]
    },
    {
      settingName: "Themes",
      description: "Set the color theme of the website.",
      status: "off",
      path: "/",
      subSettings: [
        {
          settingName: "Dark Mode",
          status: "off"
        },
        {
          settingName: "Change Currency",
          status: "off"
        }
      ]
    }
  ];

  render() {
    return (
      <div style={{ height: "100%" }}>
        <ul>
          {this.settings.map((setting, key) => {
            return (
              <SettingsList
                key={key}
                settingName={setting.settingName}
                description={setting.description}
                status={setting.status}
                path={setting.path}
                subSettings={setting.subSettings}
                liID={`s-${key}`}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
