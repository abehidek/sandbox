defmodule Server.Repo.Migrations.CreateTodos do
  use Ecto.Migration

  def change do
    create table(:todos, primary_key: true) do
      add :content, :string, null: false
      add :completed_at, :utc_datetime, null: true

      timestamps()
    end
  end
end
