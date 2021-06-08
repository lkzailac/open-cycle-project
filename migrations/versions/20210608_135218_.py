"""empty message

Revision ID: 351a2a2ae318
Revises: b3e37c41dbb5
Create Date: 2021-06-08 13:52:18.970055

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '351a2a2ae318'
down_revision = 'b3e37c41dbb5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('companies_admin_email_key', 'companies', type_='unique')
    op.drop_constraint('companies_name_key', 'companies', type_='unique')
    op.drop_column('companies', 'name')
    op.drop_column('companies', 'admin_email')
    op.drop_column('companies', 'logo_url')
    op.drop_column('companies', 'statement')
    op.drop_column('companies', 'carbon_goal_date')
    op.drop_column('companies', 'c_footprint_mt')
    op.drop_column('companies', 'hashed_password')
    op.drop_column('companies', 'transparency_score')
    op.drop_column('companies', 'carbon_goal')
    op.drop_column('companies', 'products_sold')
    op.drop_column('companies', 'signup_date')
    op.drop_column('companies', 'warehouse_location')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('companies', sa.Column('warehouse_location', sa.VARCHAR(), autoincrement=False, nullable=False))
    op.add_column('companies', sa.Column('signup_date', postgresql.TIMESTAMP(), autoincrement=False, nullable=True))
    op.add_column('companies', sa.Column('products_sold', sa.INTEGER(), autoincrement=False, nullable=False))
    op.add_column('companies', sa.Column('carbon_goal', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True))
    op.add_column('companies', sa.Column('transparency_score', sa.INTEGER(), autoincrement=False, nullable=True))
    op.add_column('companies', sa.Column('hashed_password', sa.VARCHAR(length=255), autoincrement=False, nullable=False))
    op.add_column('companies', sa.Column('c_footprint_mt', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True))
    op.add_column('companies', sa.Column('carbon_goal_date', postgresql.TIMESTAMP(), autoincrement=False, nullable=True))
    op.add_column('companies', sa.Column('statement', sa.TEXT(), autoincrement=False, nullable=True))
    op.add_column('companies', sa.Column('logo_url', sa.VARCHAR(length=255), autoincrement=False, nullable=True))
    op.add_column('companies', sa.Column('admin_email', sa.VARCHAR(length=255), autoincrement=False, nullable=False))
    op.add_column('companies', sa.Column('name', sa.VARCHAR(length=40), autoincrement=False, nullable=False))
    op.create_unique_constraint('companies_name_key', 'companies', ['name'])
    op.create_unique_constraint('companies_admin_email_key', 'companies', ['admin_email'])
    # ### end Alembic commands ###