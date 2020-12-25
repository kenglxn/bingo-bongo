import { Link, useHistory } from "react-router-dom";
import { Button, Card, Tooltip, List } from "antd";
import { useStorage } from "context/Storage";
import {
  FileAddOutlined,
  CheckCircleOutlined,
  SnippetsOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

function Home() {
  let history = useHistory();
  const { state: games } = useStorage();

  return (
    <Card>
      <Tooltip title="opprett nytt spill">
        <Button
          onClick={() => history.push("/game")}
          type="primary"
          icon={<FileAddOutlined />}
        />
      </Tooltip>

      <List
        itemLayout="horizontal"
        dataSource={games}
        renderItem={(game) => (
          <List.Item>
            <List.Item.Meta
              avatar={<CheckCircleOutlined />}
              title={<Link to={`/game/${game.id}`}>{game.name}</Link>}
              description={`${game.name} @ ${game.created_at}`}
            />
          </List.Item>
        )}
      />

      <TestData />
    </Card>
  );
}

function TestData() {
  const { set } = useStorage();
  const testData = [
    {
      id: 1,
      name: "julebingo",
      created_at: Date.now(),
    },
  ];
  return (
    <Card>
      <Button
        onClick={() => set(testData)}
        type="primary"
        icon={<SnippetsOutlined />}
      />
      <Button onClick={() => set()} type="default" icon={<DeleteOutlined />} />
    </Card>
  );
}

export default Home;
