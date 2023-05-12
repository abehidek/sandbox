defmodule Server.Todos.Todo do
  use Ecto.Schema
  import Ecto.Changeset

  schema "todos" do
    field(:completed_at, :utc_datetime)
    field(:content, :string)

    timestamps()
  end

  @doc false
  def changeset(todo, attrs) do
    todo
    |> cast(attrs, [:content, :completed_at])
    |> validate_required([:content])
  end
end
