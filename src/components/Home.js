import { Link, useHistory } from "react-router-dom";
import { Divider, Button, Row, Col, Tooltip, List } from "antd";
import { useStorage } from "context/Storage";
import { FileAddOutlined, CheckCircleOutlined } from "@ant-design/icons";

function Home() {
  let history = useHistory();
  const { state: games } = useStorage();

  return (
    <>
      <Divider>Bingo</Divider>
      <Row justify="center" gutter={[10, 10]}>
        <Col flex="0 1 80vw">
          <Tooltip title="opprett nytt spill">
            <Button
              data-testid="opprett nytt spill"
              onClick={() => history.push("/game")}
              type="primary"
              icon={<FileAddOutlined />}
            >
              Lag spill
            </Button>
          </Tooltip>

          <List
            locale={{ emptyText: <></> }}
            itemLayout="horizontal"
            dataSource={games}
            pagination={{
              pageSize: 10,
              hideOnSinglePage: true,
            }}
            renderItem={(game) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<CheckCircleOutlined />}
                  title={<Link to={`/game/${game.id}`}>{game.name}</Link>}
                  description={`${game.name}: ${new Date(
                    game.created_at
                  ).toLocaleString()}`}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
}

export default Home;
