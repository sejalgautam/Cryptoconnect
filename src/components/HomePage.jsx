import React, { useEffect, useRef, useState } from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic, Card } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";

import { Box } from "@chakra-ui/react";
import Cryptocurrencies from "../pages/cryptocurrencies/Cryptocurrencies";
import News from "../pages/news/News";

const { Title } = Typography;
let arr = [];
for (var i = 1; i < 10; i++) {
  arr.push(i);
}
console.log(arr);

const Homepage = ({ cryptos }) => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  const [searchTerm, setSearchTerm] = useState("");

  if (isFetching) return <Loader />;

  return (
    <Box pl={{ base: "0%", lg: "18%" }}>
      <Title
        level={2}
        style={{ margin: " 3rem 0rem", color: "white" }}
        className="heading"
      >
        Global Crypto Stats
      </Title>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Box
            bgColor="#000626"
            color="white"
            pt="1rem"
            pb="1rem"
            pl="15%"
            borderRadius="1rem"
          >
            {" "}
            <h6>Total Cryptocurrencies</h6>
            <p style={{ fontSize: "50px" }}>{globalStats.total} </p>
          </Box>
        </Col>
        <Col span={12}>
          <Box
            bgColor="#000626"
            color="white"
            pt="1rem"
            pb="1rem"
            pl="15%"
            borderRadius="1rem"
          >
            {" "}
            <h6>Total Exchanges</h6>{" "}
            <p style={{ fontSize: "50px" }}>
              {millify(globalStats.totalExchanges)}
            </p>
          </Box>
        </Col>
        <Col span={12}>
          <Box
            bgColor="#000626"
            color="white"
            pt="1rem"
            pb="1rem"
            pl="15%"
            borderRadius="1rem"
          >
            {" "}
            <h6>Total Market Cap:</h6>{" "}
            <p style={{ fontSize: "50px" }}>{`$${millify(
              globalStats.totalMarketCap
            )}`}</p>
          </Box>
        </Col>
        <Col span={12}>
          <Box
            bgColor="#000626"
            color="white"
            pt="1rem"
            pb="1rem"
            pl="15%"
            borderRadius="1rem"
          >
            {" "}
            <h6>Total 24h Volume</h6>{" "}
            <p style={{ fontSize: "50px" }}>{`$${millify(
              globalStats.total24hVolume
            )}`}</p>
          </Box>
        </Col>
        <Col span={12}>
          <Box
            bgColor="#000626"
            color="white"
            pt="1rem"
            pb="1rem"
            pl="15%"
            borderRadius="1rem"
          >
            {" "}
            <h6>Total Cryptocurriencies</h6>{" "}
            <p style={{ fontSize: "50px" }}>{globalStats.total}</p>
          </Box>
        </Col>
        <Col span={12}>
          <Box
            bgColor="#000626"
            color="white"
            pt="1rem"
            pb="1rem"
            pl="15%"
            borderRadius="1rem"
          >
            {" "}
            <h6>Total Markets</h6>{" "}
            <p style={{ fontSize: "50px" }}>{globalStats.totalMarkets}</p>
          </Box>
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title
          level={2}
          style={{ margin: " 3rem 0rem", color: "white" }}
          className="home-title"
        >
          Top 10 Cryptos In The World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>

      <div
        id="carouselExampleControlsNoTouching"
        class="carousel slide"
        data-bs-touch="false"
        data-bs-interval="false"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Card
              style={{ backgroundColor: "#000626", color: "white" }}
              title={
                <span
                  style={{ color: "white" }}
                >{`${cryptos[0].rank}. ${cryptos[0].name}`}</span>
              }
              extra={
                <img
                  style={{ width: "50px" }}
                  className="crypto-image"
                  src={cryptos[0].iconUrl}
                />
              }
              hoverable
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ margin: "auto" }}>
                  <p>Price: {millify(cryptos[0].price)}</p>
                  <p>Market Cap: {millify(cryptos[0].marketCap)}</p>
                  <p>Daily Change: {cryptos[0].change}%</p>
                </div>
              </div>
            </Card>
          </div>
          {arr.map((item) => (
            <div class="carousel-item">
              {console.log(item)}
              <Card
                style={{ backgroundColor: "#000626", color: "white" }}
                title={
                  <span
                    style={{ color: "white" }}
                  >{`${cryptos[item].rank}. ${cryptos[item].name}`}</span>
                }
                extra={
                  <img
                    style={{ width: "50px" }}
                    className="crypto-image"
                    src={cryptos[item].iconUrl}
                  />
                }
                hoverable
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ margin: "auto" }}>
                    <p>Price: {millify(cryptos[item].price)}</p>
                    <p>Market Cap: {millify(cryptos[item].marketCap)}</p>
                    <p>Daily Change: {cryptos[item].change}%</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span
            style={{ backgroundColor: "black" }}
            class="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            style={{ backgroundColor: "black" }}
            class="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* <Cryptocurrencies simplified /> */}

      <div className="home-heading-container">
        <Title
          style={{ margin: " 3rem 0rem", color: "white" }}
          level={2}
          className="home-title"
        >
          Latest Crypto News
        </Title>
        <Title level={3}>
          <Link to="/news">Show more</Link>
        </Title>
      </div>
      <News simplified />
    </Box>
  );
};

export default Homepage;
