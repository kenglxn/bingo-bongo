import { Link, useHistory } from "react-router-dom";
import { Button, Card, Tooltip, List } from "antd";
import { useStorage } from "context/Storage";
import { FileAddOutlined, CheckCircleOutlined } from "@ant-design/icons";

function Home() {
  let history = useHistory();
  const { state: games } = useStorage();

  return (
    <Card>
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
    </Card>
  );
}

export default Home;
