const axios = require("axios");
const errorHandler = require("../handler/error");

const formatDate = (dateString) => {
  const eventDate = new Date(dateString);
  return `${eventDate.getDate()} ${eventDate.toLocaleString("default", {
    month: "long",
  })}, ${eventDate.getFullYear()}`;
};

// get all launches
exports.getLaunchPadData = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.spacexdata.com/v3/launchpads"
    );
    const launchPadData = response.data.map((launchPad) => {
      return {
        full_name: launchPad.full_name,
        status: launchPad.status,
        location: launchPad.location,
        attempts: launchPad.attempted_launches,
        successes: launchPad.successful_launches,
        details: launchPad.details,
      };
    });

    res.status(200).json({ data: launchPadData });
  } catch (error) {
    errorHandler.handleNotFound(res); // Handle the error appropriately
  }
};

// get history
exports.getLaunchHistory = async (req, res) => {
  try {
    const response = await axios.get("https://api.spacexdata.com/v3/history");
    const mappedHistory = response.data.map((history_item) => {
      const formattedDate = formatDate(history_item.event_date_utc);

      return {
        id: history_item.id,
        title: history_item.title,
        time: formattedDate,
        details: history_item.details,
        flight_number: history_item.flight_number,
      };
    });
    res.status(200).json({ data: mappedHistory });
  } catch (error) {
    errorHandler.handleNotFound(res);
  }
};

// get all launches by flight number
exports.getLaunchByFlightNumber = async (req, res) => {
  try {
    const { flight_number } = req.params;
    const response = await axios.get(
      `https://api.spacexdata.com/v3/launches/${flight_number}`
    );
    const launchData = response.data;

    const formattedDate = formatDate(launchData.launch_date_utc);

    const launchDetails = {
      mission_name: launchData.mission_name,
      launch_date: formattedDate,
      rocket_name: launchData.rocket.rocket_name,
      site_long_name: launchData.launch_site.site_long_name,
      details: launchData.details,
    };

    res.status(200).json({ data: launchDetails });
  } catch (error) {
    errorHandler.handleNotFound(res); // Handle the error appropriately
  }
};

exports.getMission = async (req, res) => {
  try {
    const { search, year, status, type, site } = req.params;
    const response = await axios.get("https://api.spacexdata.com/v3/launches");
    const missionData = response.data
      .map((mission) => {
        const formattedDate = formatDate(mission.launch_date_utc);
        if (year != "null") {
          if (year != Number(mission.launch_year)) {
            return null;
          }
        }
        if (status != "null") {
          if (status != String(mission.launch_success)) {
            return null;
          }
        }
        if (type != "null") {
          if (type != mission.rocket.rocket_type) {
            return null;
          }
        }
        if (site != "null") {
          if (site != mission.launch_site.site_name) {
            return null;
          }
        }

        if (search != "null") {
          if (
            !mission.mission_name
              .toLowerCase()
              .includes(search.toLowerCase()) &&
            !mission.rocket.rocket_name
              .toLowerCase()
              .includes(search.toLowerCase()) &&
            !mission.rocket.rocket_type
              .toLowerCase()
              .includes(search.toLowerCase()) &&
            !mission.launch_site.site_name_long
              .toLowerCase()
              .includes(search.toLowerCase()) &&
            !mission.rocket.rocket_type
              .toLowerCase()
              .includes(search.toLowerCase()) &&
            !mission.launch_site.site_name
              .toLowerCase()
              .includes(search.toLowerCase())
          ) {
            return null;
          }
        }
        return {
          id: mission.flight_number,
          mission_name: mission.mission_name,
          launch_date: formattedDate,
          rocket_name: mission.rocket.rocket_name,
          site_long_name: mission.launch_site.site_long_name,
        };
      })
      .filter((mission) => {
        return mission != null;
      });
    res.status(200).json({ data: missionData });
  } catch (error) {
    errorHandler.handleNotFound(res); // Handle the error appropriately
  }
};
