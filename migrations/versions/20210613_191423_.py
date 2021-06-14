"""empty message

Revision ID: da2aab9a72dc
Revises: a6632349bb78
Create Date: 2021-06-13 19:14:23.419277

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'da2aab9a72dc'
down_revision = 'a6632349bb78'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('base_users_user_id_fkey', 'base_users', type_='foreignkey')
    op.drop_constraint('base_users_company_id_fkey', 'base_users', type_='foreignkey')
    op.drop_column('base_users', 'user_id')
    op.drop_column('base_users', 'company_id')
    op.add_column('companies', sa.Column('base_user_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'companies', 'base_users', ['base_user_id'], ['id'])
    op.add_column('users', sa.Column('base_user_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'users', 'base_users', ['base_user_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'users', type_='foreignkey')
    op.drop_column('users', 'base_user_id')
    op.drop_constraint(None, 'companies', type_='foreignkey')
    op.drop_column('companies', 'base_user_id')
    op.add_column('base_users', sa.Column('company_id', sa.INTEGER(), autoincrement=False, nullable=True))
    op.add_column('base_users', sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=True))
    op.create_foreign_key('base_users_company_id_fkey', 'base_users', 'companies', ['company_id'], ['id'])
    op.create_foreign_key('base_users_user_id_fkey', 'base_users', 'users', ['user_id'], ['id'])
    # ### end Alembic commands ###